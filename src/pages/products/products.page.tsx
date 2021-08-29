import React, { useEffect } from 'react';
import Coupon from '../../components/coupon/coupon.component';
import useActivityIndicator from '../../core/hooks/useActivityIndicator';
import http from '../../core/http/axios.config';
import { Product } from '../../models/product.model';
import { Container } from './products.styles';

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const { LoadingFragment, setLoading } = useActivityIndicator();

  useEffect(() => {
    http.get<Product[]>('/products').then(response => {
      setProducts(response.data);
      setLoading(false);
    });
  }, [setLoading, setProducts]);

  return (
    <LoadingFragment height="100%">
      <Container>
        {products.map(product => (
          <Coupon key={product.id} {...product} />
        ))}
      </Container>
    </LoadingFragment>
  );
};

export default Products;
