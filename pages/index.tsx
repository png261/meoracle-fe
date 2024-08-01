import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ClassificationCat } from "@/components/icons";
import { Button } from "@mui/material";

const Intro: NextPage = () => {
    const router = useRouter();

    return (
        <div className="bg-[#0d0d0d] text-white">
            this is intro page
            <ClassificationCat />
        </div>
    );
};

export default Intro;
