import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61lwHRiu1cL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          {/* Product */}
          <Product
            id="123456"
            title="Janasya Women's Light Brown Poly Silk Straight Kurta"
            price={410.99}
            image={
              "https://m.media-amazon.com/images/I/71SRhc6ZkRL._UL1500_.jpg"
            }
            rating={5}
          />
          {/* Product */}
          <Product
            id="1331547"
            title="GYM BANDITS 10kg Home Gym Combo 3Ft Straight Rod One Pair Dumbbell Rods PVC Dumbbell Plates Home Gym Kit Weight Plates Fitness Exercise Set"
            price={799}
            image={
              "https://m.media-amazon.com/images/I/61OftQ3JgYL._SL1500_.jpg"
            }
            rating={3}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="1683521"
            title="Mother Sparsh Plant Powered Natural Baby Lotion, 200ml"
            price={340}
            image={
              "https://m.media-amazon.com/images/I/716K6vzotJL._SL1500_.jpg"
            }
            rating={4}
          />
          {/* Product */}
          <Product
            id="441698"
            title="Airdopes 141 TWS Earbuds with 42H Playtime, BEAST™ Mode, ENx™ Tech, ASAP™ Charge, IWP™, IPX4 Water Resistance, Smooth Touch Controls(Bold Black)"
            price={"1,299"}
            image={
              "https://m.media-amazon.com/images/I/41ENFo8EsSL._SL1500_.jpg"
            }
            rating={2}
          />
          {/* Product */}
          <Product
            id="123546789"
            title="Garnier Men Power White Face Wash, 100 Gram"
            price={399}
            image={
              "https://m.media-amazon.com/images/I/618xpAimYsL._SL1000_.jpg"
            }
            rating={4}
          />
          {/* Product */}
          <Product
            id="785461"
            title='Aurion Knee Wraps (Pair) for Cross Training Gym Workout Weightlifting, Knee Straps for Squats - for Men & Women- 78"-Compression & Elastic Support.'
            price={399}
            image={
              "https://m.media-amazon.com/images/I/81Ai36Lew9S._SL1500_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* Product */}
          <Product
            id="8461230"
            title="ASUS TUF Gaming F15, 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 Ti GDDR6 4GB Graphics, Gaming Laptop (8GB RAM/512GB SSD/Windows 10/Fortress Gray/2.3 Kg), FX566LI-HN272T"
            price={"63,490"}
            image={
              "https://m.media-amazon.com/images/I/914o5xV1+8L._SL1500_.jpg"
            }
            rating={5}
          />

          {/* Product */}
          <Product
            id="452379"
            title="EDICT by Boat DynaBeats EWH01 Wireless Bluetooth On Ear Headphone with Mic (Black)"
            price={"999"}
            image={
              "https://m.media-amazon.com/images/I/51nCZCTu6XS._SL1500_.jpg"
            }
            rating={4}
          />

          {/* Product */}
          <Product
            id="1236547"
            title="LG 81.28 cm (32 inch) 4K-UHD (3840 x 2160) VESA Display HDR 600 Monitor, DCI-P3 95%, Radeon FreeSync, Inbuilt Speaker (5W x 2), Height/Tilt Adjustable Stand, Display Port - 32UL750 (White)"
            price={"44,990"}
            image={
              "https://m.media-amazon.com/images/I/716O20R9oLL._SL1334_.jpg"
            }
            rating={3}
          />
        </div>

        <div className="home__row">
          {/* Product */}
          <Product
            id="9632585"
            title="LG 35WN75C-B – 35” QHD (3440 x 1440) Curved Monitor with sRGB 99% Color Gamut and HDR 10 and USB-Type C (94W Power Delivery)"
            price={"36,900"}
            image={
              "https://image-us.samsung.com/SamsungUS/home/computing/monitors/curved/pd/lc43j890dknxza/gallery/LC43J890DKNXZA_Gallery_1-G1.jpg?$product-details-jpg$"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
