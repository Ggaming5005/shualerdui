import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [shoeOrdCount, setShoeOrdCount] = useState(0);
  const [currMainImg, setCurrMainImg] = useState(1);
  const [currModalImg, setCurrModalImg] = useState(1);
  const [imgModal, setImgModal] = useState(false);
  const [cart, setCart] = useState({ price: "", qty: 0 });
  return (
    <>
      <Header order={cart} setCart={setCart} />
      <main className="w-full min-h-screen font-Kumbh mb-5">
        {/* Hero section */}
        <div className="md:py-16 pt-0 flex max-w-6xl flex-col md:flex-row justify-center md:mx-auto">
          <div className="hidden w-1/2 md:flex flex-col items-center gap-6">
            {/* Img display section */}
            <div>
              <img
                src={`/images/image-product-${currMainImg}.jpg`}
                alt={`image-product-${currMainImg}.jpg`}
                className="w-96 rounded-xl cursor-pointer"
                onClick={() => setImgModal((prev) => !prev)}
              />
            </div>
            <div className="flex w-96 justify-between">
              {[1, 2, 3, 4].map((item) => (
                <div>
                  <img
                    src={`/images/image-product-${item}-thumbnail.jpg`}
                    alt={`image-product-${item}-thumbnail.jpg`}
                    className={`w-[85px] rounded-xl hover:opacity-45 cursor-pointer ${
                      currMainImg === item
                        ? "opacity-60 border-4 border-orange-500"
                        : ""
                    }`}
                    onClick={() => setCurrMainImg(item)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* mobile view img toggle */}
          <div className="md:hidden w-2/3 min-w-[375px] mx-auto relative mb-6">
            <img
              src={`/images/image-product-${currMainImg}.jpg`}
              alt={`image-product-${currMainImg}.jpg`}
              className="w-full"
            />
            <div
              className="w-12 h-12 bg-white absolute left-0 ms-3 rounded-full flex items-center justify-center cursor-pointer top-1/2 -translate-y-1/2"
              onClick={() =>
                currMainImg === 1
                  ? setCurrMainImg(4)
                  : setCurrMainImg((prev) => prev - 1)
              }
            >
              <img
                src="/images/icon-previous.svg"
                alt="icon-previous.svg"
                className="w-3"
              />
            </div>
            <div
              className="w-12 h-12 bg-white absolute right-0 top-1/2 -translate-y-1/2 me-3 rounded-full flex items-center justify-center cursor-pointer"
              onClick={() =>
                currMainImg === 4
                  ? setCurrMainImg(1)
                  : setCurrMainImg((prev) => prev + 1)
              }
            >
              <img
                src="/images/icon-next.svg"
                alt="icon-next.svg"
                className="w-3"
              />
            </div>
          </div>
          {/* cart compo */}
          <div className="flex flex-col px-3 lg:px-0 md:w-1/2 justify-center w-2/3 min-w-[375px] mx-auto">
            {/* cart */}
            <h2 className="uppercase text-dgBlue font-extrabold text-sm tracking-widest mb-3">
              Sneaker Company
            </h2>
            <h1 className="mb-7 text-4xl lg:text-5xl font-extrabold text-vdBlue">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-dgBlue mb-5">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-vdBlue text-3xl font-extrabold">
                $125.00
              </span>
              <div className="text-center rounded-md w-12 bg-orange-500 text-white text-md">
                50%
              </div>
            </div>
            <p className="text-dgBlue font-bold text-md line-through mb-8">
              $250.00
            </p>
            <div className="flex gap-3 md:flex-row flex-col">
              <div className="bg-lgBlue flex items-center justify-between p-3 md:w-36 w-full mx-auto md:mx-0 rounded-lg">
                {/* toggle product qty */}
                <button
                  onClick={
                    shoeOrdCount > 0
                      ? () => setShoeOrdCount((prev) => prev - 1)
                      : null
                  }
                >
                  <img
                    src="/images/icon-minus.svg"
                    alt="icon-minus.svg"
                    className="w-3"
                  />
                </button>
                <span className="text-vdBlue font-bold text-lg">
                  {shoeOrdCount}
                </span>
                <button onClick={() => setShoeOrdCount((prev) => prev + 1)}>
                  <img
                    src="/images/icon-plus.svg"
                    alt="icon-plus.svg"
                    className="w-3"
                  />
                </button>
              </div>
              <button
                className="bg-orange-500 md:w-52 w-full mx-auto md:mx-0 py-3 flex items-center gap-3 bg-Orange hover:bg-PaleOrange justify-center rounded-lg text-vdBlue font-bold"
                onClick={() =>
                  shoeOrdCount > 0
                    ? setCart({ price: 125, qty: shoeOrdCount })
                    : null
                }
              >
                <img
                  src="/images/icon-cart.svg"
                  alt="icon-cart.svg"
                  className="w-5 text-vdBlue"
                />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
        {imgModal ? (
          <div className="w-full h-screen fixed bg-opacity-70 bg-black flex flex-col gap-5 items-center justify-center z-50 top-0 left-0">
            <div className="w-96 relative">
              <img
                src="/images/icon-close.svg"
                alt="icon-close.svg"
                className="w-5 ms-auto cursor-pointer"
                onClick={() => setImgModal((prev) => !prev)}
              />
              <div
                className="w-12 h-12 bg-white absolute left-0 top-52 -ms-6 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() =>
                  currModalImg === 1
                    ? setCurrModalImg(4)
                    : setCurrModalImg((prev) => prev - 1)
                }
              >
                <img
                  src="/images/icon-previous.svg"
                  alt="icon-previous.svg"
                  className="w-3"
                />
              </div>
              <div
                className="w-12 h-12 bg-white absolute right-0 top-52 -me-6 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() =>
                  currModalImg === 4
                    ? setCurrModalImg(1)
                    : setCurrModalImg((prev) => prev + 1)
                }
              >
                <img
                  src="/images/icon-next.svg"
                  alt="icon-next.svg"
                  className="w-3"
                />
              </div>
            </div>
            <div>
              <img
                src={`/images/image-product-${currModalImg}.jpg`}
                alt={`image-product-${currModalImg}.jpg`}
                className="w-96 rounded-xl cursor-pointer"
                onClick={() => setImgModal((prev) => !prev)}
              />
            </div>
            <div className="flex w-96 justify-between">
              {[1, 2, 3, 4].map((item) => (
                <div>
                  <img
                    src={`/images/image-product-${item}-thumbnail.jpg`}
                    alt={`image-product-${item}-thumbnail.jpg`}
                    className={`w-[85px] rounded-xl hover:opacity-45 cursor-pointer ${
                      currModalImg === item
                        ? "opacity-60 border-4 border-orange-500"
                        : ""
                    }`}
                    onClick={() => setCurrModalImg(item)}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}

export default App;
