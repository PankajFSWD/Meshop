import React from "react";
import G1 from "../assets/Gallery/g1.jpg";
import G2 from "../assets/Gallery/g2.jpg";
import G9 from "../assets/Gallery/g9.jpg";
import G4 from "../assets/Gallery/g4.jpg";
import G7 from "../assets/Gallery/g7.jpg";
import G8 from "../assets/Gallery/g8.jpg";
function Gallery() {
  return (
    <>
      <section className="text-gray-600 body-font py-12">
        <div className="container px-5  mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-75 hover:translate-x-3 hover:skew-y-2 hover:transition hover:duration-700 hover:ease-in "
                  src={G1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={G2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={G9}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src={G4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={G7}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src={G8}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
