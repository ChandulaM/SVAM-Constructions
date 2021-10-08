import React, { useContext, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ItemContext } from "../../contexts/Items/ItemContext";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "40%",
  p: 4,
  borderRadius: 2,
};

function QuotationModal({ quote, open, setOpen }) {
  const { items } = useContext(ItemContext);
  const [itemList, setitemList] = useState([]);

  useEffect(() => {
    const itemsInOrder = items.find((item) => item.id == quote.itemListId);
    setitemList(itemsInOrder);
    console.log(itemList);
  });

  return (
    <Modal
      open={open}
      onClose={setOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex-col">
          <div className="text-2xl">
            Quotation No - <span className="font-semibold">{quote.id}</span>
          </div>
          <div className="my-2 text-lg">
            <div>
              Quotation Date:{" "}
              <span className="font-semibold">{quote.date}</span>
            </div>
          </div>
          <div className="my-2 text-lg">
            <div>
              Quoation Status:{" "}
              <span className="font-semibold uppercase">{quote.status}</span>
            </div>
          </div>
          <div className="my-2 text-lg">
            <div>
              Total Price :{" "}
              <span className="font-semibold">Rs. {itemList.total}</span>
            </div>
          </div>
          <div className="my-2 text-lg ">
            <div className="font-semibold">Items in Quote</div>
          </div>
          <div className="grid grid-cols-4">
            <div className="text-lg font-semibold bg-gray-400 p-1">Item</div>
            <div className="text-lg font-semibold bg-gray-400 p-1">
              Item Quantity
            </div>
            <div className="text-lg font-semibold bg-gray-400 p-1">Unit</div>
            <div className="text-lg font-semibold bg-gray-400 p-1">
              Price Per Unit(Rs.)
            </div>
            {itemList.items &&
              itemList.items.map((item) => (
                <>
                  <div className="p-1 border-b-2">{item.name}</div>
                  <div className="p-1 border-b-2">{item.quantity}</div>
                  <div className="p-1 border-b-2">{item.unit}</div>
                  <div className="p-1 border-b-2">{item.price}</div>
                </>
              ))}
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default QuotationModal;
