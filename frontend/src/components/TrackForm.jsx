import {useForm} from "react-hook-form";
import {Button, Form} from "react-bootstrap";
import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";
import {toastPromise, toastSuccess, toastWarning} from "../utils/toast-generator";
import orderApi from "../api/order.api";
import track from "../pages/Track";
import TrackInfo from "./TrackInfo";

const schema = yup.object({
    track: yup.string().length(36, "Field must be 36 symbols")
});

const TrackForm = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [trackInfo, setTrackInfo] = React.useState({});
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            track: searchParams.get("id"),
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const trackInfo = await toastPromise(orderApi.getById(data.track), null, "Your track was not found", "Looking for your track")

            if (trackInfo.data.data) {
                toastSuccess("Your track has successfully found");
                setTrackInfo({
                    ...trackInfo.data.data,
                    products: JSON.parse(trackInfo.data.data.products)
                });
                console.log({
                    ...trackInfo.data.data,
                    products: JSON.parse(trackInfo.data.data.products)
                })
                return;
            }

            toastWarning("Your track hasn't been found");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mt-4">
            <h1 className="mb-3">Track your package</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Control
                        {...register('track', {
                            required: true,
                        })}
                        type="text"
                        placeholder="Enter your track number..."/>
                    <Form.Text className="text-danger">
                        {errors?.track?.message && (
                            <p className="mt-2">* {errors.track.message}</p>
                        )}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Check your track
                </Button>
            </Form>
            {Object.keys(trackInfo).length !== 0 && (
                <TrackInfo track={trackInfo}/>
            )}
        </div>
    )
}

export default TrackForm;