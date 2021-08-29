import React, { useEffect } from 'react';
import Coupon from '../../components/coupon/coupon.component';
import useActivityIndicator from '../../core/hooks/useActivityIndicator';
import http from '../../core/http/axios.config';
import { Product } from '../../models/product.model';
import { Container } from './products.styles';
import { useSearchContext } from '../../core/contexts/search-bar.context';

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const { search } = useSearchContext();
  const { LoadingFragment, setLoading } = useActivityIndicator();

  useEffect(() => {
    setFilteredProducts(
      products.filter(product => product.name.toLowerCase().includes(search)),
    );
  }, [products, search]);

  useEffect(() => {
    http.get<Product[]>('/products').then(response => {
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    });
  }, [setLoading, setProducts]);

  return (
    <LoadingFragment height="100%">
      <Container>
        {filteredProducts.map(product => (
          <Coupon key={product.id} {...product} />
        ))}
      </Container>
    </LoadingFragment>
  );
};

export default Products;
