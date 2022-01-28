import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { useDispatch } from "react-redux";
import { addPackage } from "../slices/postSlice";

function PackageModal({ serviceTier, description, price }) {
  const dispatch = useDispatch();
  //Hook Form
  const { register, handleSubmit } = useForm();

  const newPackage = (data) => {
    dispatch(addPackage(data));
    console.log("datapackage", data);
  };

  //**********Show and Hide
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>
        <i
          style={{
            marginRight: "18px",
            paddingBottom: "10px",
            marginLeft: "10px",
            fontSize: "18px",
            color: "gray",
            cursor: "pointer",
            transition: "0.4s ease-in-out",
          }}
          class="fas fa-money-bill-alt"
        >
          <span style={{ fontSize: "11px" }}> add package</span>
        </i>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New package</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="">serviceTier</FormLabel>
              <Input
                id="serviceTier"
                placeholder="serviceTier"
                {...register("serviceTier")}
              />
              <FormLabel htmlFor="price">Price</FormLabel>
              <Input id="price" placeholder="price" {...register("price")} />
              <FormLabel htmlFor="description">description</FormLabel>
              <Input
                id="description"
                placeholder="description"
                {...register("description")}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>

            <Button variant="ghost" onClick={handleSubmit(newPackage)}>
              {"add price"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default PackageModal;
