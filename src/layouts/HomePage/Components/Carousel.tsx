import { ReturnBook } from "./ReturnBook";
import book1 from "../../../Images/BooksImages/book1.jpg";
import book2 from "../../../Images/BooksImages/book2.jpg";
import book3 from "../../../Images/BooksImages/book3.jpg";

export const Carousel = () => {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next "I stayed up too late reading" book.</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 
                d-none d-lg-block"
        data-bs-interval="false"
      >
        {/* Desctop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook
                name="Pragmatic Programmer"
                author="David Thomas"
                path={book1}
              />
              <ReturnBook
                name="Clean Code"
                author="Robert Martin"
                path={book2}
              />
              <ReturnBook name="Code" author="Charles Petzold" path={book3} />
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook
                name="Pragmatic Programmer"
                author="David Thomas"
                path={book1}
              />
              <ReturnBook
                name="Clean Code"
                author="Robert Martin"
                path={book2}
              />
              <ReturnBook name="Code" author="Charles Petzold" path={book3} />
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <ReturnBook
                name="Pragmatic Programmer"
                author="David Thomas"
                path={book1}
              />
              <ReturnBook
                name="Clean Code"
                author="Robert Martin"
                path={book2}
              />
              <ReturnBook name="Code" author="Charles Petzold" path={book3} />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img
              src={require(`./../../../Images/BooksImages/book1.jpg`)}
              width="151"
              height="233"
              alt="Book"
            />
            <h6 className="mt-2">
              <b>Pragmatic Programmer</b>
            </h6>
            <p>David Thomas</p>
            <a className="btn main-color text-white" href="null">
              Reserve
            </a>
          </div>
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg" href="null">
          View more
        </a>
      </div>
    </div>
  );
};
