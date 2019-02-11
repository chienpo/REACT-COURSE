import React from 'react'

interface Interface {
    fullAdvert: any;
}

const FullCarAdvertisement = (props: Interface) => (
    <div>
        {props.fullAdvert.map((value: any, index: any) => (
            <div>
                <p key={index}>{value.body}</p>
                <img src={value.image} alt={value.brand}/>
            </div>
        ))}
    </div>
);

export default FullCarAdvertisement
