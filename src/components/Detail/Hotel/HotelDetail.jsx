import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate, useParams } from "react-router-dom";
import { getHotelDetailById } from "../../../redux/actions/HotelesActions";
import LoadingComponent from "../../Loading/LoadingComponent";
import CommentBoard from "../../CommentBoard/CommentBoard";

export default function HotelDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hotel = useSelector((state) => state.hoteles.detail);
  const { id } = useParams();
  console.log(hotel);
  const setings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptativeHeigth: false,
  };

  useEffect(() => {
    const getDetail = async () => {
      try {
        await dispatch(getHotelDetailById(id));
      } catch (error) {
        console.log("Ocurrio un error en el useEffect", error);
      }
    };
    id && getDetail();
  }, [dispatch, id]);

  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <Grid>
      {Object.keys(hotel).length ? (
        <Grid
          sx={{
            maxWidth: "70vw",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "2%",
            marginLeft: "8%",
          }}
        >
          <Typography variant="h1" gutterBottom>
            {hotel.name}
          </Typography>
          <Slider {...setings}>
            {hotel.img
              ? hotel.img.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      maxWidth: "70%",
                    }}
                  >
                    <img src={item} alt=""></img>
                  </Box>
                ))
              : "cargando"}
          </Slider>
          <Grid marginTop="4%">
            <Typography variant="h3" sx={{ fontWeight: "600" }} gutterBottom>
              {" "}
              Descripcion:
              <Typography variant="h4" sx={{ display: "block" }}>
                {hotel.description}
              </Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Ubicacion:
              <Typography variant="h4">{hotel.location}</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Estrellas
              <Typography variant="h4">{hotel.stars}</Typography>
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "700" }} gutterBottom>
              {" "}
              Precio:
              <Typography variant="h4">{hotel.priceDay} por noche</Typography>
            </Typography>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            <Button
              variant="contained"
              sx={{ fontSize: "1.6rem" }}
              startIcon={<ArrowBackIosIcon />}
              onClick={goBack}
            >
              volver
            </Button>
          </Box>
        </Grid>
      ) : (
        <LoadingComponent />
      )
      }
      <CommentBoard/>
    </Grid>
  );
}

