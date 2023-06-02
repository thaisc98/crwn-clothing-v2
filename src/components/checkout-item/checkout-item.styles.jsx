import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .name {
    width: 23%;
  }

  .price {
    width: 23%;
    display: flex;
    justify-content: flex-end;
    justify-items: end;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.div`
  margin: 0 10px;
`;

export const Quatity = styled.span`
  display: flex;
  align-items: center;
`;

export const RemoveButton = styled.div`
  padding-left: 10rem;
  cursor: pointer;
`;
