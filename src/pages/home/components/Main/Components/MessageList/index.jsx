import { forwardRef, useEffect, useRef } from "react";
import MessageListStyle from "./MessageList.style";
import Change from "../Change";
import MessageDelete from "../MessageDelete";

const MessageList = forwardRef(function ({ scrollToEndHandler }, ref) {
  useEffect(() => {
    scrollToEndHandler();
  }, []);

  return (
    <MessageListStyle ref={ref}>
      <div className="messageList__wrapper">
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>
        <p className="message__text">
          Salom bizning interaktiv chatga xush kelibsz
        </p>

        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <MessageDelete />
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <p className="message__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quis
          voluptate pariatur, eaque modi vitae animi voluptatibus itaque
          exercitationem quidem quia. Rerum placeat, error illum aut
          voluptatibus perferendis magnam quaerat.
        </p>
        <div data-aos="fade-left"></div>
      </div>
    </MessageListStyle>
  );
});

export default MessageList;
