import Image from "next/image";
import React from "react";

const AddsBanner = () => {
  return (
    <div>
      {/* Title */}
      <div className="flex w-full h-auto min-w-[1178px] min-h-[44px] justify-between">
        <div className="flex w-auto h-auto min-w-[266px] min-h-[36px] gap-[8px]">
          <div className="w-[141px] h-[31px] font-[500] text-[16px] leading-[32px] text-[#000000]">
            Proud to be part of
          </div>
          <div className="w-[117px] h-[36px] font-[700] text-[24px] leading-[38px] text-[#003459]">
            Pet Sellers
          </div>
        </div>
        <button className="flex w-auto h-auto min-w-[201px]  min-h-[44px] rounded-[57px] border-[1.5px] border-[#003459] pt-[12px] pr-[28px] pb-[12px] pl-[28px]">
          <div className="w-[137px] h-[20px] font-[500] text-[14px] leading-5 text-[#003459]">
            View all our sellers
          </div>
          <div className="w-5 h-5">
            <Image
              src="/assets/icons/rightArrow.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
        </button>
      </div>
      {/* Adds */}
      <div className="flex w-full h-full min-w-[1180px] min-h-[112px] gap-5 mt-6">
        {/* Add 1 */}
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/02b6/b266/58915815ebfb624ccd4b8f8bc9d06ecf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H6lSAB5LIJqs3Dl8W17NhtS0HSTJW48HXXjQUVTeDIVqDKDxaE3XwU5rqkwF98JldEDmERk~iW0QreCRElOrUgkeQ9Jt0Sr2NEDK0EtcDTujI9-pGnDbJmqU~QX9bzVeAnErfNbsmw5pB93tIgI2lpeVzVLWRSB-6WLdjDjiwZsbBb0H633aPJm3R3vzdAaW~8wS5fH0uCmAH-h3-0P4IQeAJnaPFJ6pGIfPspfeG6xiNh7pxaMzpLeQ8OyyGV57ubNoDm7U8sWYzGYM7mYFJsuA5ELEKBC5hKb-JLKYY6Tag9GWFvzPiH1hn2ajsF-ftX2C7Ytv5HzXyWLc53mhYQ__"
            alt=""
            width={88}
            height={64}
          />
        </div>
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/6926/2552/e00bed606afe9e77f1cc9c7f2e95597b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lv1KFyxEOIraktJ6lRzZlfM74wRsvssmBW3zMiSihNq2ThpJO5zr5m3Vl0jbVJufAvLS1jwiW3IxJPJjoYyT40GXMJ8hczK~4EFAZ7eaSAbsC4q19UK64l12ZMJ1vLvxUK742r2hpKy9O6oPTlFTJg8aanzDOaAAzJa0YndRKfc4i0R6vCuDCBxqJRqm3VZbj6WUp-bSfaQwBhwxl8A6-R3CvRPXaitfud5gnir152csX0CqFmnnDkwwVmboDXiHUXhuVJ-eHDdQ5ncmWtzfXBmhEbXEmPGVE6v2cy~lqGOGmug0Dba9ZUm0WvQBwyfGaFKonYP-Y~FjLh-i5hQYQw__"
            width={88}
            height={64}
          />
        </div>
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://www.figma.com/file/BrHTBSm5lu0Q0CdQjNjrIr/image/4400db70058110bfc32e5bc6e602a644bb081932"
            alt=""
            width={88}
            height={64}
          />
        </div>
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/e25c/6f9e/2a2af258ba0090ef77ead6e78aec992d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lkOIvCwiQ-8kUuk9gzUJ5d1IEs3SLctx29N0fNPkNIxIiWxSJsgOXjvDaMJwmFdxnzXu0pve5wz5rVsJXepQjKxe0WmLlBwBT-7Y34HDA1Bh-xHSTg61MPnsBMtDPokxQdqhXHT1v7zG2mb5qR-kIqAUitbwcfj5kO~Ftsbvtpok1LFeZrVw-o9f0~6dfa798vAK5f-q4CslETKn3g~VwwwQ9VwTh9zjkd0IBSpTd0HI8rk~s3Sd76FcefLBAX~ZLgwT20MjNf~FCt8-3bR~1NxLpzx~jFF6z22VQEq958CN7ZupNcYyZEedXZmK3~m1MeEiv0XbxfEBky-ZI7k2LA__"
            alt=""
            width={88}
            height={64}
          />
        </div>
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/abf8/1bf3/b261ca3e4e94dccf723b6ed12db2575b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEPfw8ipSVJgN8B5OIFGogMg~WqB1W3Tsenu~ijl1n0DcPp2PQ2kDgVe~6pyaxf1xLd3fl4aDjhNozeALc7IEW1JpgQuvD9T~ciMN2x5FnGo9cZN0sXVgxBBptKxRCJEg4~ecAK~STrt6vav0KlXErsMN5i91Vbk7QnFykCc5H-k4Xf570WA1tlza0DgsyyC3kt2t0z5PkpVvznNvSG0f0g7vcZFJ9g2HDTCjHAZNkSHu8VPLUN5a8sQxR0yg3FLLTK165IBSzcdoBqJ51J5H4Pb7cBNZGwLQqTpkFftqcI9bIDpUDqJanyYNWYnkNvmL3Z4H78aX7~8kz98cOR-dw__"
            alt=""
            width={88}
            height={64}
          />
        </div>
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/a10a/1b43/70e851524fa4db43a4f7d590708a8d8b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEkDWuhI1FGR0A5JLxMAiHxQswNYRHiS0KyfWRP9ng~c701UTYEEorAFo5xgFHGgpRMKXpNrN1mLPeC3bW-MxKqFSPMUGGiy4IjLtSqy~BYDcs7o16fp0b6EWYpP0slAY0ezIvhNusmYjrQovYuwehcLgGwlhjn1zzYzFki388t7M1DevVBcA0YNs9qGH6MAG6dYKVdy3Juiou5O5NKispifV9U3SeGGkSrwU9Lv3bqPUIJZ2270rkkw46SY8fjDZmyPrTljoRJ~MCNaQFTGlukGUw9BHWQ0-CqCy1-a1rjB7zkyUW1rsNYVQuuY0VPkGxOrl5J3GAAng8hflf2qJA__"
            alt=""
            width={88}
            height={64}
          />
        </div>
        <div className="w-full h-full min-w-[151px] min-h-[112px] pr-[16px] pl-[16px] gap-[10px]">
          <Image
            src="https://s3-alpha-sig.figma.com/img/d46b/554b/89025a0019d8f8d0409d4bc87affc11e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpIuo7jqhRT1kHXAbowuhS-zP10LVKwZiE0PYwOvSqx2nq93twZhSu9z5ywgbNlTFXY2Kru1BzPgZSIaOxxgWoW6BUcjTX~S62Q7scTFWzEWIYdFsHCY0~WFZeYwJVXZBEnmmqVWAB6Uhv5RpMsTFK7ld6P44tbf0cPPTJAUMrPFA7pwQ8dEtYa8JbQpah-P1jicaXjY1O3MxEIHxiQBL-J9xTXPcwFsm-dSsuYG85vPgCQcMifinLzLdUIcmrhYtK3YKCaL459poN2q6yc9A8ehgCPtM41WMPvONH6ZVIqUfZ~ex3QpZj52W8rvArnwbYuxQ~cFHgTifECnoj4V6w__"
            alt=""
            width={88}
            height={64}
          />
        </div>
      </div>
    </div>
  );
};

export default AddsBanner;
