import maps from "../api/maps.api";

const getAddressArray = async (latitude, longitude) => {
    try {
        const {data} = await maps.getAddress(latitude, longitude);

        return data.results.map(address => {
            return address?.formatted_address;
        });
    } catch (err) {
        return [];
    }
}

export default getAddressArray;