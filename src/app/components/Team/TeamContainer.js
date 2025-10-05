import React, { useState, useEffect, useRef } from "react";
import TeamCard from "./TeamCard";
import TeamContent from "./TeamContent";
import TeamDetailContainer from "./TeamsDetail/TeamDetailContainer";
import gsap from "gsap";
export default function TeamContainer() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef(null);

  const openTeamsModal = () => {
    document.querySelector("header").classList.add("hidden");
    document.querySelector("body").classList.add("active");
    setOpenModal(true);
  };

  const closeTeamsModal = () => {
    document.querySelector("header").classList.remove("hidden");
    document.querySelector("body").classList.remove("active");
    setOpenModal(false);
  };

  useEffect(() => {
    if (openModal && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5, ease: "ease.in" }
      );
    } else if (!openModal && modalRef.current) {
      gsap.to(modalRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          modalRef.current.style.display = "none";
        },
      });
    }
  }, [openModal]);

  return !openModal ? (
    <div className="container h-full">
      <div className="grid gap-10 grid-cols-4">
        <div className="col-span-3">
          <div className="grid gap-15 grid-cols-3">
            <div className="col-span-1">
              <TeamCard
                onClick={() => openTeamsModal()}
                image={`/assets/teams/teams_1.png`}
              />
            </div>
            <div className="col-span-1">
              <TeamCard
                onClick={() => openTeamsModal()}
                image={`/assets/teams/teams_2.png`}
              />
            </div>
            <div className="col-span-1">
              <TeamCard
                onClick={() => openTeamsModal()}
                image={`/assets/teams/teams_3.png`}
              />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <TeamContent />
        </div>
      </div>
    </div>
  ) : (
    <div ref={modalRef}>
      <TeamDetailContainer
        isOpen={openModal}
        setOpenModal={setOpenModal}
        onClose={closeTeamsModal}
      />
    </div>
  );
}