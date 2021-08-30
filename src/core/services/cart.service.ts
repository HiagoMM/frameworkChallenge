import { PermissionsAndroid, Platform } from 'react-native';

import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { Product } from '../../models/product.model';
const isPermitted = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permissão para escrita',
          message: 'O app precisa de permissão para ler e escrever',
          buttonPositive: 'confirma',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      return false;
    }
  } else {
    return true;
  }
};

const generateHtml = (itens: Product[], total: number) => `
<hr />
<table style="width: 80%; margin: 0 auto">
  <caption>
    <h1><strong>Nota Fiscal</strong></h1>
  </caption>
  <thead>
    <tr>
      <td>Nome</td>
      <td>Quantidade</td>
      <td>Valor Unit.</td>
      <td>Valor Total</td>
    </tr>
  </thead>

  <tbody>
  ${itens
    .map(
      item => `<tr>
      <td>${item.name}</td>
      <td>${item.qtd}</td>
      <td>R$ ${item.price.toFixed(2)}</td>
      <td>R$ ${(item.price * Number(item.qtd)).toFixed(2)}</td>
    </tr>`,
    )
    .join('')}
  </tbody>
</table>
<hr style="margin: 10px 0px"/>
<table style="width: 80%; margin: 0 auto">
  <thead>
    <tr>
      <td style="width: 73%;">Frete</td>
      <td>Preço total </td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>R$ 10</td>
      <td>R$ ${total.toFixed(2)}</td>
    </tr>
  </tbody>
</table>
<hr style="margin: 10px 0px"/>

`;

export const createPDF = async (itens: Product[], total: number) => {
  if (await isPermitted()) {
    let options = {
      html: generateHtml(itens, total),
      fileName: 'NotaFiscal',
      directory: 'docs',
    };
    let file = await RNHTMLtoPDF.convert(options);
    console.log(file.filePath);
  }
};
