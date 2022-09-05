import React, { useState } from "react";
import Header from "../../../components/Header";
import SearchInput from "../../../components/SearchInput";
import { getShips } from "../../../services/sessions";
import { Card } from "../../Card";
import Footer from "../../Footer";
import { countStops } from "../../utils";
import { Pagination } from "../../Pagination";

import { GiSpaceship } from "react-icons/gi";

import { Container, WrapperHome, WrapperCard } from "./styles";
import Loading from "../../Loading";

export const HomeLayout = () => {
  const [valueInput, setValueInput] = useState("");
  const [starShip, setStarShip] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const handlerInputSearch = (value: number) => {
    setLoading(true);
    getShips(value)
      .then((response) => {
        setStarShip(response.data.results);
        setTotalPage(Math.ceil(response.data.count / 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <Container>
      <WrapperHome>
        <Header />
        <SearchInput
          onSubmit={() => handlerInputSearch(1)}
          onChange={(e: { target: HTMLInputElement }) =>
            setValueInput(e.target.value)
          }
        />
        {loading ? (
          <Loading />
        ) : (
          <WrapperCard>
            {starShip.length > 1 ? (
              starShip.map((value, index) => (
                <Card
                  key={index}
                  name={value["name"]}
                  stops={countStops(
                    valueInput,
                    value["consumables"],
                    value["MGLT"]
                  )}
                  mglt={value["MGLT"]}
                />
              ))
            ) : (
              <GiSpaceship style={{ fontSize: 253, opacity: 0.04 }} />
            )}
          </WrapperCard>
        )}

        {totalPage > 1 && (
          <Pagination
            totalPages={totalPage}
            pageClick={(value: number) => handlerInputSearch(value)}
          />
        )}
      </WrapperHome>
      <Footer />
    </Container>
  );
};
