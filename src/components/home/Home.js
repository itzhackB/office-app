import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: 'https://www.mural-wallpaper.com/wp-content/uploads/2020/12/mega-menu-room-office.jpg',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilCzTeBMGU-0Ts3_Kl-G7rWOohvw8eMKZIg946YehJkPpHsBmB3IEzpW1uEZPS6yT1b0&usqp=CAU',
    },
    {
        original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yXBystaiFRwKGSnVFHX44E0gjPBdhGCW9KZ_A2FJqL2JlwBivKHfHGnLwJG8HOwgq2g&usqp=CAU',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nOHG-7oufvzlVxDhzTzNmAJkQLL-EcTThfhcJks-kep_dslfkeq05jgfxtOrbBT4T0c&usqp=CAU',
    },
    {
        original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsmfzLy1fkzGOoY6T7kPuMV39ZeMP_ATqd9C7iTb0ljp_5gIbN9vWH9ISXQvmG3MoMfk&usqp=CAU',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfMmFwIRS8EgdH0gZ7X3FYpxKTdtC9KTpEcB6egpKCcRi6CsQvx2uxWXGQDeJDZMhA7g&usqp=CAU',
    },
];
export default function Home() {
    return (
        <div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>Wolcome to the best office company</h1>
            <ImageGallery items={images} />;
        </div>
    )
}
