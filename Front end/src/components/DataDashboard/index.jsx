import { useEffect, useState } from "react";
import { Container, ButtonData } from "./style";
import axios from "axios";

export const DataDashboard = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(null);
  const formatDate = (date) => date.toLocaleDateString();
  const handleNextDay = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + 1);
      return newDate;
    });
  };
  const fetchDataByDate = async (formatDate) => {
    try{
        const response = await axios.get(`http://localhost:3333/`)
        setData(response.data)
    }catch(error){
        console.error("Error fetching data: ", error);
    }
  } 

  useEffect(() => {
    fetchDataByDate(formatDate(date))
  },[date]);

  const handlePreviousDay = () => {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() - 1);
      return newDate;
    });
  };

  const currentDate = new Date().toLocaleDateString();
  return (
    <Container>
      <ButtonData onClick={handlePreviousDay}>e</ButtonData>
      <h1 style={{ textAlign: "center" }}>{formatDate(date)}</h1>
      <ButtonData onClick={handleNextDay}>d</ButtonData>
    </Container>
  );
};
