import { GridLoader } from "react-spinners";
import usePayments from "../../../Hooks/usePayments";

const PaymentHistory = () => {

    const [payments, loading] = usePayments();
    console.log(payments);

    if (loading) {
        return <div className="ml-10 mt-16">

            <GridLoader
                color="#C2DEDC"
            ></GridLoader>

        </div>
    }

    return (
        <div className="overflow-x-auto pl-12 pt-16 font-kanit table-zebra">
            <table className="table">

                <thead>
                    <tr className="text-lg">
                        <th>
                            #
                        </th>
                        <th>Price</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map((payment, index) => <tr
                            key={payment._id}
                        >
                            <th>
                                {index + 1}
                            </th>
                            <td className="text-lime-700">
                                ${payment.price}
                            </td>
                            <td className="text-green-500">
                                {payment.transactionId}
                            </td>
                            <td className="text-purple-800">
                                {
                                    new Date(payment.date).toLocaleDateString()
                                }
                            </td>
                            <td className="text-orange-800">
                                {
                                    new Date(payment.date).toLocaleTimeString()
                                }
                            </td>
                        </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default PaymentHistory;