export function Facebook() {
  return (
    <div className="border-[2px] rounded-[50px]  flex justify-center  h-[30px] w-[30px] cursor-pointer pt-[5px] m-[30px]">
      <a href="https://www.facebook.com/">
        <svg
          width="9"
          height="17"
          viewBox="0 0 9 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.392 16.189V8.90203H7.85L8.215 6.04903H5.392V4.23203C5.392 3.40903 5.621 2.84503 6.803 2.84503H8.303V0.302027C7.57365 0.223829 6.84053 0.186104 6.107 0.189027C5.60805 0.15263 5.10718 0.225753 4.63946 0.403275C4.17175 0.580796 3.74849 0.858425 3.39935 1.21671C3.0502 1.575 2.78361 2.00529 2.61824 2.47744C2.45287 2.94959 2.39272 3.45219 2.442 3.95003V6.04403H0V8.89703H2.447V16.189H5.392Z"
            fill="#FAFAFA"
          />
        </svg>
      </a>
    </div>
  );
}

export function Download() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
