import React, { useRef, useState } from "react";
import {
  Dialog,
  Portal,
  Button,
  Input,
  Stack,
} from "@chakra-ui/react";
import { MdClose, MdModeEdit } from "react-icons/md";

const UpdateProductDialog = ({ product, onUpdate }) => {
  // Local state for the edited product data.
  const [editedProduct, setEditedProduct] = useState({ ...product });
  // Create a ref for the initial focus element.
  const initialRef = useRef();

  // Handler to update local state for any input change.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog.Root initialFocusEl={initialRef.current}>
      {/* The trigger button that opens the dialog */}
      <Dialog.Trigger asChild>
        <Button bg="blue.500">
          <MdModeEdit/>
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger asChild>
              <Button variant="ghost" position="absolute" top="2" right="2">
                <MdClose size={20} />
              </Button>
            </Dialog.CloseTrigger>
            <Dialog.Header>
              <Dialog.Title>Update Product</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={editedProduct.name}
                  onChange={handleChange}
                  ref={initialRef}
                />
                <Input
                  placeholder="Price"
                  name="price"
                  type="number"
                  value={editedProduct.price}
                  onChange={handleChange}
                />
                <Input
                  placeholder="Image URL"
                  name="image"
                  value={editedProduct.image}
                  onChange={handleChange}
                />
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button
                colorPalette="blue"
                onClick={() => {
                  console.log("Save button clicked", editedProduct);
                  onUpdate(editedProduct);
                }}
              >
                Save
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default UpdateProductDialog;
