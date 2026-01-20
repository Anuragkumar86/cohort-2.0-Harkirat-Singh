import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Admin } from "@repo/ui/admin";



export default function Home() {
  return (
    <div>
      <Button appName="wev-app">
        Hi There
        </Button>
    </div>
  );
}
