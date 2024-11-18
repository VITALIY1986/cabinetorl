import React, { FC } from "react";
import Image from "next/image";
import scss from "./Style.module.scss"; // Подключаем стили из CSS-модуля
import { FormattedMessage, useIntl } from "react-intl";
interface ServiceProps {
  post: {
    serviciiCollection: {
      items: Array<{
        serviciidescription: string;
        serviciititle: string;
        serviciimedia: {
          url: string;
        };
      }>;
    };
  };
}

const ServicesCard: FC<ServiceProps> = ({ post }) => {
  return (
    <div className="container">
      <h2 className={scss.titleservices}>
      ORL: Servicii de diagnostic și tratament pentru afecțiuni ale auzului și căilor respiratorii 
                  </h2>
    <div className={scss.serviceswrapper}>
      {post.serviciiCollection.items.map((item, index) => (
        <div
          key={index}
          className={`${scss.card} `}
        >
          {/* Изображение */}
          {item.serviciimedia?.url && (
            <div className={`${scss.imagewrapper} `}>
              <Image
                width={128}
                height={128}
                src={item.serviciimedia.url}
                alt={item.serviciititle}
             className={`${scss.imageinner} `}
         
              />
            </div>
          )}
          {/* Текстовая часть */}
          <div className={`${scss.textblock} flex-1 p-4`}>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.serviciititle}
            </h3>
            <p className="text-gray-600">{item.serviciidescription}</p>
          </div>
        </div>
      ))}
    </div></div>
  );
};

export default ServicesCard;
