interface SVGProps {
  color: string;
}

export const Bag: React.FC<SVGProps> = ({ color }) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.62498 7.01751V5.83334C9.62498 4.67302 10.0859 3.56022 10.9064 2.73975C11.7269 1.91928 12.8397 1.45834 14 1.45834C15.1603 1.45834 16.2731 1.91928 17.0936 2.73975C17.914 3.56022 18.375 4.67302 18.375 5.83334V7.01751C19.8765 7.06301 20.7958 7.22401 21.497 7.80618C22.4688 8.61351 22.7255 9.97851 23.2376 12.7097L24.1126 17.3763C24.8325 21.217 25.1918 23.1373 24.143 24.402C23.093 25.6667 21.1388 25.6667 17.2317 25.6667H10.7683C6.85998 25.6667 4.90699 25.6667 3.85699 24.402C2.80699 23.1373 3.16865 21.217 3.88732 17.3763L4.76232 12.7097C5.27565 9.97968 5.53115 8.61351 6.50298 7.80618C7.20415 7.22401 8.12349 7.06301 9.62498 7.01751ZM11.375 5.83334C11.375 5.13715 11.6515 4.46947 12.1438 3.97719C12.6361 3.48491 13.3038 3.20834 14 3.20834C14.6962 3.20834 15.3639 3.48491 15.8561 3.97719C16.3484 4.46947 16.625 5.13715 16.625 5.83334V7.00001H11.375V5.83334Z"
        fill={color || "white"}
      />
    </svg>
  );
};