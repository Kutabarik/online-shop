import React from "react";
import {Button, ListGroup} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const TrackList = ({handleClose}) => {
    const [tracks, setTracks] = React.useState([]);
    const navigate = useNavigate();

    React.useEffect(() => {
        const tracks = JSON.parse(localStorage.getItem("tracks"));
        setTracks(tracks ?? []);
    }, []);

    if (tracks.length === 0) {
        return (
            <h4 className="text-center">You don't have tracks</h4>
        )
    }

    const redirectToTrack = (track = undefined) => {
        handleClose();
        return track ? navigate(`/track?id=${track}`) : navigate(`/track`);
    }

    const deleteAllTracks = () => {
        setTracks([]);
        localStorage.removeItem("tracks");
    }

    return (
        <div>
            {tracks.length !== 0 && (
                <ListGroup>
                    {tracks.map(track => (
                        <ListGroup.Item key={track} onClick={() => redirectToTrack(track)}>{track}</ListGroup.Item>
                    ))}
                </ListGroup>
            )}
            <p style={{fontWeight: "500"}} className="mt-3">These track numbers are saved locally, please do not forget
                to copy them.</p>
            <p onClick={() => redirectToTrack()} className="text-primary" style={{cursor: "pointer"}}>Track your
                package</p>
            <Button variant="outline-primary" onClick={deleteAllTracks}>Delete All Tracks</Button>
        </div>
    )
};

export default TrackList;