// components/SalesSection.js
import React from 'react';
import { SalesSection, SalesInfo, SalesTitle, SalesNumber, ChartContainer, ChartLabel, ChartNumber } from './styles';

const SalesSectionComponent = ({ title, total, data, loading }) => (
  <SalesSection>
    <SalesInfo>
      <SalesTitle>{title}</SalesTitle>
      <SalesNumber>{loading ? "Carregando..." : `R$ ${total}`}</SalesNumber>
      <ChartContainer className="chart">
        {data.map((item, index) => (
          <div key={index}>
            <ChartLabel>{item.method}:</ChartLabel>
            <ChartNumber color={item.color}>{item.value}</ChartNumber>
          </div>
        ))}
      </ChartContainer>
    </SalesInfo>
  </SalesSection>
);

export default SalesSectionComponent;
