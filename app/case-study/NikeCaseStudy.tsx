import Image from "next/image";
import DesignerDrawing from "@/public/images/designer-drawing.jpg";

export default function NikeCaseStudy() {
  return (
    <>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut
        aliquam purus sit amet luctus venenatis. Scelerisque in dictum non
        consectetur a erat nam.
        <br />
        <br />
        Vel eros donec ac odio tempor. Cras pulvinar mattis nunc sed blandit
        libero volutpat. Enim tortor at auctor urna nunc id cursus metus.
        Adipiscing elit duis tristique sollicitudin nibh. Arcu vitae elementum
        curabitur vitae.
        <br />
        <br />
        Orci porta non pulvinar neque laoreet suspendisse. Quisque sagittis
        purus sit amet volutpat. Gravida cum sociis natoque penatibus et magnis
        dis parturient. Porta nibh venenatis cras sed. Phasellus egestas tellus
        rutrum tellus pellentesque eu.
      </p>
      <Image src={DesignerDrawing} alt="A designer drawing on a paper" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut
        aliquam purus sit amet luctus venenatis. Scelerisque in dictum non
        consectetur a erat nam.
        <br />
        <br />
        Vel eros donec ac odio tempor. Cras pulvinar mattis nunc sed blandit
        libero volutpat. Enim tortor at auctor urna nunc id cursus metus.
        Adipiscing elit duis tristique sollicitudin nibh. Arcu vitae elementum
        curabitur vitae.
      </p>
      <h2>Important note</h2>
      <p>
        Orci porta non pulvinar neque laoreet suspendisse. Quisque sagittis
        purus sit amet volutpat. Gravida cum sociis natoque penatibus et magnis
        dis parturient. Porta nibh venenatis cras sed. Phasellus egestas tellus
        rutrum tellus pellentesque eu.
      </p>
    </>
  );
}
