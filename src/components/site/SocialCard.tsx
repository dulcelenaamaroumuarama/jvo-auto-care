import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { WHATSAPP_URL, TEL_URL } from "@/lib/contact";

export function SocialCard() {
  return (
    <div className="social-card">
      <div className="social-card__bg" />
      <div className="social-card__logo">JVO</div>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="social-card__box social-card__box--1"
      >
        <span className="social-card__icon"><Instagram className="h-full w-full" /></span>
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="social-card__box social-card__box--2"
      >
        <span className="social-card__icon"><Facebook className="h-full w-full" /></span>
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="social-card__box social-card__box--3"
      >
        <span className="social-card__icon"><MessageCircle className="h-full w-full" /></span>
      </a>
      <a
        href={TEL_URL}
        aria-label="E-mail / Contato"
        className="social-card__box social-card__box--4"
      >
        <span className="social-card__icon"><Mail className="h-full w-full" /></span>
      </a>
    </div>
  );
}
