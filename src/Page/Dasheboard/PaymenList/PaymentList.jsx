import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentList = () => {
  const axiosSecure = useAxiosSecure();
  const { data: payments } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <div className="flex justify-around m-4">
        <h2 className="text-3xl font-semibold text-center text-dark-01">
          Payment List
        </h2>
        <h2 className="text-3xl font-semibold text-center text-dark-01">
          Total: {payments?.length}
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto border rounded-md">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-base font-semibold text-dark-01">
                <th>##</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Pay Id</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((pay, index) => (
                <tr key={pay._id}>
                  <th>{index + 1}</th>
                  <td>{pay.email}</td>
                  <td>{pay.price}</td>
                  <td>{pay.transtionId}</td>
                  <td>{pay.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;
