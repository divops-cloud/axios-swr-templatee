// components/JoinAnonymously.jsx

import Image from "next/image";
import { useState } from "react";
import Avatar from "boring-avatars";
import { useHMSActions } from "@100mslive/hms-video-react";

import UsernameInput from "./JoinAnonymously/UsernameInput";
import PasswordInput from "./JoinAnonymously/PasswordInput";
// import RoleSelect from "./JoinAnonymously/RoleSelect";
import JoinAnonymouslyButton from "./JoinAnonymously/JoinAnonymouslyButton";

const JoinAnonymously = () => {
  const hmsActions = useHMSActions();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("listener");

  const JoinAnonymouslyDashboard = async () => {
    try {
      const response = await fetch("/api/token", {
        method: "POST",
        body: JSON.stringify({ role })
      });
      const { token } = await response.json();
      hmsActions.JoinAnonymously({
        userName: name || "Anonymous",
        authToken: token,
        settings: {
          isAudioMuted: true
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Image
        src="/mars.svg"
        alt="mars"
        className="flex flex-grow object-cover"
        layout="fill"
      />
      <div className="bg-gray-800 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 text-white shadow-lg space-y-4 flex flex-col items-center max-w-md">
        <Avatar name={name} variant="marble" size="48" />
        <UsernameInput name={name} setName={setName} />
        <PasswordInput password={password} setPassword={setPassword} />
        {/* <RoleSelect role={role} setRole={setRole} /> */}
        <JoinAnonymouslyButton JoinAnonymouslyDashboard={JoinAnonymouslyDashboard} />
      </div>
    </>
  );
};

export default JoinAnonymously;