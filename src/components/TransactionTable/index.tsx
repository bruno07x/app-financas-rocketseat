import { Container } from "./style";
import { useEffect } from 'react';
import { api } from "../../services/api";

export const TransactionTable = () => {

    useEffect(() => {
        api.get('/transactions').then(res => console.log(res.data));
    }, []);

    return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento Web Site</td>
                    <td className='deposit'>R$ 12.000,00</td>
                    <td>Desenvolvimento</td>
                    <td>20/12/2020</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className='withdraw'>-R$ 1.400,00</td>
                    <td>Casa</td>
                    <td>15/12/2020</td>
                </tr>
            </tbody>
        </table>
    </Container>
    );
}