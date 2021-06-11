import styled from "styled-components";
import thumb1 from "../../assets/artwork/t-1978 CHRYSLER LEBARON COUPÉ 03.png";
import thumb2 from "../../assets/artwork/t-Chevrolet Caprice Classic Sedan '1980 03.png";
import thumb3 from "../../assets/artwork/t-FERRARI TESTAROSSA 05.png";
import thumb4 from "../../assets/artwork/t-FIAT 132 2000 04.png";
import thumb5 from "../../assets/artwork/t-FORD LTD LANDAU 1979 02.png";
import thumb6 from "../../assets/artwork/t-FORD SIERRA XR4i ES VE-SPEC 1986 03.png";
import thumb7 from "../../assets/artwork/t-LAMBORGHINI COUNTACH 5000 QV 1985 05.png";
import thumb8 from "../../assets/artwork/t-Land Rover Range Rover Vogue 1991 02.png";
import thumb9 from "../../assets/artwork/t-PORSCHE 959 05.png";
import thumb10 from "../../assets/artwork/t-Renault 18 GTS Sedan '1978-81 02.png";
import thumb11 from "../../assets/artwork/t-Renault Fuego GTX 02.png";
import thumb12 from "../../assets/artwork/t-RENAULT MÉGANE HATCHBACK '2002 02.png";

const WorkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  max-width: 100px;
  margin: 20px 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Name = styled.span`
  font-size: 12px;
  font-family: Arial;
  padding: 5px;
  text-align: center;
  display: block;
`;

const Work = ({ changeArtwork }) => {
  const data = [
    {
      id: "car01",
      name: "1978 CHRYSLER LEBARON COUPÉ 03",
      source: thumb1,
    },
    {
      id: "car02",
      name: "Chevrolet Caprice Classic Sedan '1980 03",
      source: thumb2,
    },
    {
      id: "car03",
      name: "FERRARI TESTAROSSA 05",
      source: thumb3,
    },
    {
      id: "car04",
      name: "FIAT 132 2000 04",
      source: thumb4,
    },
    {
      id: "car05",
      name: "FORD LTD LANDAU 1979 02",
      source: thumb5,
    },
    {
      id: "car06",
      name: "FORD SIERRA XR4i ES VE-SPEC 1986 03",
      source: thumb6,
    },
    {
      id: "car07",
      name: "LAMBORGHINI COUNTACH 5000 QV 1985 05",
      source: thumb7,
    },
    {
      id: "car08",
      name: "Land Rover Range Rover Vogue 1991 02",
      source: thumb8,
    },
    {
      id: "car09",
      name: "PORSCHE 959 05",
      source: thumb9,
    },
    {
      id: "car10",
      name: "Renault 18 GTS Sedan '1978-81 02",
      source: thumb10,
    },
    {
      id: "car11",
      name: "Renault Fuego GTX 02",
      source: thumb11,
    },
    {
      id: "car12",
      name: "RENAULT MÉGANE HATCHBACK '2002 02",
      source: thumb12,
    },
  ];

  return (
    <WorkGrid>
      {data.map(({ id, name, source }) => {
        return (
          <Item
            onDoubleClick={() => {
              changeArtwork(id);
            }}
          >
            <Thumbnail alt={name} src={source} />
            <Name>{name}</Name>
          </Item>
        );
      })}
    </WorkGrid>
  );
};

export default Work;
