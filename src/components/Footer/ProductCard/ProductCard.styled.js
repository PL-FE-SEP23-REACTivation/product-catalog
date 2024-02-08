import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  height: 506px;
  width: 272px;
  padding: 32px;
  border: 1px solid rgba(226, 230, 233, 1);
  box-sizing: border-box;
`;

export const CardImgContainer = styled.div`
  height: 196px;

  img {
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CardTitle = styled.div`
  text-align: left;
  font-family: 'Mont', sans-serif;
  font-size: 14px;
  margin-top: 8px;
  padding-top: 16px;
  width: 208px;
  font-weight: 600;
  color: rgba(49, 50, 55, 1);
  line-height: 21px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardPrice = styled.div`
  font-family: 'Mont', sans-serif;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  color: rgba(49, 50, 55, 1);
  margin-top: 8px;
  width: 100%;
  line-height: 1.4;
`;

export const CardPriceRegular = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: rgba(49, 50, 55, 1);

  &:before {
    content: '$';
  }
`;

export const CardPriceDiscount = styled.div`
  font-weight: 700;
  font-size: 22px;
  color: rgba(137, 147, 154, 1);
  text-decoration: line-through;

  &:before {
    content: '$';
  }
`;

export const Line = styled.hr`
  border-style: solid;
  border-color: rgba(226, 230, 233, 1);
  border-width: 1px;
  width: 100%;
  margin-top: 8px;
`;

export const CardProperties = styled.div`
  font-family: 'Mont', sans-serif;
  width: 100%;
  margin-top: 8px;
  line-height: 25px;
`;

export const CardSpec = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-weight: 600;
  font-size: 12px;
`;

export const CardSpecName = styled.div`
  color: rgba(137, 147, 154, 1);
`;

export const CardSpecValue = styled.div`
  color: rgba(49, 50, 55, 1);
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
`;

export const ButtonAdd = styled.button`
  font-family: 'Mont', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-right: 8px;
  color: white;
  background-color: rgba(49, 50, 55, 1);
  border: 1px solid rgba(49, 50, 55, 1);
  font-size: 14px;
  line-height: 21px;

  &:hover {
    box-shadow: 0px 3px 13px 0px rgba(23, 32, 49, 0.4);
    cursor: pointer;
  }
`;

export const ButtonAdded = styled.button`
  font-family: 'Mont', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-right: 8px;
  color: rgba(39, 174, 96, 1);
  background-color: white;
  border: 1px solid rgba(226, 230, 233, 1);
  font-size: 14px;
  line-height: 21px;

  &:hover {
    box-shadow: 0px 3px 13px 0px rgba(23, 32, 49, 0.4);
    cursor: pointer;
  }
`;

export const ButtonFavorite = styled.button`
  font-family: 'Mont', sans-serif;
  width: 40px;
  height: 40px;
  background-color: white;
  border: 1px solid rgba(180, 189, 195, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    border: 1px solid rgba(49, 50, 55, 1);
    cursor: pointer;
  }
`;
