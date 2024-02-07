import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 506px;
  width: 272px;
  padding: 32px;
  border: 1px solid rgba(226, 230, 233, 1);
`;

export const CardImgContainer = styled.div`
  height: 196px;
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
`;

export const CardPrice = styled.div`
  font-family: 'Mont', sans-serif;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  color: rgba(49, 50, 55, 1);
  margin-top: 8px;
  width: 100%;
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
  margin-bottom: 32px;
`;

export const ButtonAdd = styled.div`
  font-family: 'Mont', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  color: white;
  background-color: rgba(49, 50, 55, 1);
  font-size: 14px;
  line-height: 21px;
`;

export const ButtonFavorite = styled.div`
  font-family: 'Mont', sans-serif;
  margin-left: 8px;
  width: 40px;
  height: 40px;
  color: rgba(49, 50, 55, 1);
  background-color: white;
`;
