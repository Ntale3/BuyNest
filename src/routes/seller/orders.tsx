import { assets, orderDummyData } from '@/assets/assets';
import { useAppStore } from '@/store/useAppStore';
import type { Order } from '@/types';
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/seller/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  const { currency, } = useAppStore();

    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSellerOrders = async () => {
        setOrders(orderDummyData);
        setLoading(false);
    }

    useEffect(() => {
        fetchSellerOrders();
    }, []);
  return(
     <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between text-sm">
            {loading ? (<h1>Loading....</h1>) : <div className="md:p-10 p-4 space-y-5">
                <h2 className="text-lg font-medium">Orders</h2>
                <div className="max-w-4xl rounded-md">
                    {orders.map((order, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-5 justify-between p-5 border-t border-border">
                            <div className="flex-1 flex gap-5 max-w-80">
                                <img
                                    className="max-w-16 max-h-16 object-cover"
                                    src={assets.box_icon}
                                    alt="box_icon"
                                />
                                <p className="flex flex-col gap-3">
                                    <span className="font-medium">
                                        {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                    </span>
                                    <span>Items : {order.items.length}</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-medium">{order.address.fullName}</span>
                                    <br />
                                    <span >{order.address.area}</span>
                                    <br />
                                    <span>{`${order.address.city}, ${order.address.state}`}</span>
                                    <br />
                                    <span>{order.address.phoneNumber}</span>
                                </p>
                            </div>
                            <p className="font-medium my-auto">{currency}{order.amount}</p>
                            <div>
                                <p className="flex flex-col">
                                    <span>Method : COD</span>
                                    <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                                    <span>Payment : Pending</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
            {/* <Footer /> */}
        </div>
  )
}
