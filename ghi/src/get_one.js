import React, { useEffect, useState } from 'react';

function GetOne() {
    const [wandrrrPost, setWandrrrPost] = useState("");
    const fetchData = async () => {
        const url = `http://localhost:8000/wandrrrs/${wandrrrs_id}/`
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();

// need to set data for post details    ?????
            setWandrrrPost(data.wandrrrs_id);
        }
    }

    useEffect(() => { fetchData(); }, [])


    async function deleteWandrrr(wandrrr) {
        const deleteUrl = `http://localhost:8000/wandrrrs/${wandrrrs_id}/`
        const response = await fetch(deleteUrl, { method: "delete" })
        if (response.ok) {
            fetchData()

        }

    }




    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer Name</th>
                    <th>Vip Status</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>Action</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {serviceAppointment.filter(appointments => {
                    return (appointments.is_complete == false)
                }).map(service => {
                    return (
                        <tr key={service.id}>
                            <td>{service.vin_service}</td>
                            <td>{service.vehicle_owner}</td>
                            <td>{service.is_vip ? "yes" : "no"}</td>
                            <td>{new Date(service.datetime).toLocaleDateString()}</td>
                            <td>{new Date(service.datetime).toLocaleTimeString()}</td>
                            <td>{service.technician.technician_name}</td>
                            <td>{service.reason}</td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm" onClick={() => completeService(service)}>Complete</button>
                            </td>

                            <td><button onClick={() => deleteService(service)} type="button" className="btn btn-danger btn-sm">Cancel</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default GetOne;
