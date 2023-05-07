import React from "react";
import {set, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Button, Form} from "react-bootstrap";
import * as yup from 'yup';
import getAddressArray from "../utils/getAddressArray";
import moment from "moment";
import orderApi from "../api/order.api";
import 'react-toastify/dist/ReactToastify.css';
import {toastError, toastPromise, toastSuccess, toastWarning} from "../utils/toast-generator";

const schema = yup.object({
    address: yup.string().matches(/.{3,20}/, {
        excludeEmptyString: true,
        message: 'Min. length: 3. Max length: 20',
    }),
    userName: yup.string().required("This field is required").min(3, "Min. length: 3").max(20, "Max. length: 20")
})

const CartForm = () => {
    const [isShowAddress, setIsShowAddress] = React.useState(false);
    const [addresses, setAddresses] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState("none");

    const {
        register,
        handleSubmit,
        setError,
        reset,
        watch,
        formState: {errors, isValid},
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            address: "",
            userName: "",
            myAddress: false,
            extraAddress: "",
            extraAddressStr: ""
        },
        resolver: yupResolver(schema)
    })

    const watchIsMyAddress = watch("myAddress", false);

    const onChangeMyAddress = (event) => {
        setIsShowAddress(event.target.checked);

        const isSuccess = (position) => {
            const {latitude, longitude} = position.coords;

            getAddressArray(latitude, longitude).then(data => {
                setAddresses(data);
            }).catch(err => {
                setAddresses([]);
            }).finally(() => {
                setIsLoading("filled");
            })
        }

        const isError = () => {
            setAddresses([]);
        }

        if (event.target.checked) {
            setIsLoading("pending");
            window.navigator.geolocation.getCurrentPosition(isSuccess, isError);
        }
    }

    const resetForm = () => {
        reset();
        setIsShowAddress(false);
    }

    const onSubmit = (data) => {
        if (watchIsMyAddress && !data?.extraAddress || !watchIsMyAddress && !data.address) {
            setError('addressError', {
                type: "address",
                message: "You need to enter address",
            });
            return;
        }

        const address = watchIsMyAddress ? `${data.extraAddress} ${data.extraAddressStr}` : data.address;

        const order = {
            "name": data.userName,
            "street": address,
            "status": "void",
            "billed_date": moment().format("yyyy-MM-DD"),
        }

        toastPromise(orderApi.createOrder(order), "Your order successfully registered", "You have some Errors", "You order is proceed")
            .then(() => {
                resetForm();
            })
            .catch(err => {
                Object.keys(err.response.data.errors).forEach(error => {
                    if (err.response.data.errors?.[error]) {
                        err.response.data.errors?.[error].forEach(str => {
                            toastError(str);
                        })
                    }
                });
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        {...register('userName', {
                            required: true,
                            minLength: 3,
                            maxLength: 20
                        })}
                        type="text"
                        placeholder="Enter your name..."/>
                    <Form.Text className="text-danger">
                        {errors?.userName?.message && (
                            <p className="mt-2">* {errors.userName.message}</p>
                        )}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        {...register('address', {
                            required: false,
                            minLength: 5,
                            maxLength: 20
                        })}
                        type="text"
                        disabled={watchIsMyAddress}
                        placeholder="Enter your address..."/>
                    <Form.Text className="text-danger">
                        {errors?.address?.message && (
                            <p className="mt-2">* {errors.address.message}</p>
                        )}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        {...register('myAddress', {
                            required: false,
                            onChange: onChangeMyAddress
                        })}
                        type="checkbox"
                        label="Use my location address"
                    />
                </Form.Group>
                {isShowAddress && (
                    <div>
                        {isLoading === "pending" && <p>Loading data ...</p>}
                        {isLoading === "filled" && (
                            <div>
                                {addresses.length === 0 ? (
                                    <div>Невозможно получить текущее местоположение</div>
                                ) : (
                                    <div>
                                        {addresses.map((add, i) => (
                                            <Form.Check
                                                {...register('extraAddress')}
                                                key={i}
                                                type="radio"
                                                label={add}
                                                value={add}
                                            />
                                        ))}
                                    </div>
                                )}
                                <Form.Control
                                    {...register('extraAddressStr', {
                                        required: false,
                                        minLength: 5,
                                        maxLength: 20
                                    })}
                                    className="mb-2"
                                    type="text"
                                    placeholder="Enter extra information about address..."/>
                            </div>
                        )}
                    </div>
                )}
                <Form.Text className="text-danger">
                    {errors?.addressError?.message && (
                        <p className="mt-2">* {errors.addressError.message}</p>
                    )}
                </Form.Text>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default CartForm;