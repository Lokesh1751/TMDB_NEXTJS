"use client";
import React from "react";
import { useParams } from "next/navigation";
import PersonCard from "../../../Card/PersonCard";

function PersonDetails() {
  const params = useParams();
  return (
    <>
      <PersonCard id={params.id} />
    </>
  );
}

export default PersonDetails;
