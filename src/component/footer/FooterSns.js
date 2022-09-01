import React from "react";
import styled from "styled-components";

// icon
import facebook from "../../assets/sns/sns_f.svg";
import twitter from "../../assets/sns/sns_t.svg";
import instagram from "../../assets/sns/sns_i.svg";
import youtube from "../../assets/sns/sns_y.svg";
import kakao from "../../assets/sns/sns_k.svg";

const StyledBox = styled("div")`
  margin: 30px 0;
  text-align: center;

  h2 {
    font-size: 12px;
  }
`;

const StyledUl = styled("ul")`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  li {
    width: 40px;
    height: 40px;
    margin: 0 10px;

    a {
      display: block;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      vertical-align: top;
    }

    :hover {
      opacity: 0.5;
    }
  }
`;

const FooterSns = () => {
  const sns = [
    {
      name: "facebook",
      src: facebook,
    },
    {
      name: "twitter",
      src: twitter,
    },
    {
      name: "instagram",
      src: instagram,
    },
    {
      name: "youtube",
      src: youtube,
    },
    {
      name: "kakao",
      src: kakao,
    },
  ];

  return (
    <StyledBox>
      <h2>소셜</h2>
      <StyledUl>
        {sns.map((item, idx) => (
          <li key={idx}>
            <a href="#">
              <img src={item.src} alt={item.name} />
            </a>
          </li>
        ))}
      </StyledUl>
    </StyledBox>
  );
};

export default FooterSns;
