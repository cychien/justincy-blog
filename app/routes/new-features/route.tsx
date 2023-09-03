import { Announcement } from "./Announcement";

export default function Index() {
  return (
    <main className="-mb-12 lg:-mb-24 lg:flex">
      <div className="my-8 lg:sticky lg:top-0 lg:my-0 lg:flex lg:h-[calc(100vh_-_72px)] lg:flex-1 lg:items-center">
        <div className="lg:-translate-y-12">
          <h1 className="text-2xl font-bold">每週 New Features</h1>
          <p className="mt-8 leading-7 text-gray-700 lg:max-w-[360px]">
            我喜歡 <b>SaaS</b>，因此也想把自己的 blog 看作 SaaS 來經營，我
            <b> 每週 </b>
            都會發布一些新 features 來增進 blog 的體驗，歡迎關注 👨🏻‍🍳
          </p>
        </div>
      </div>
      <div className="relative -mx-4 lg:-mx-0 lg:flex-1">
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-tl-2xl rounded-tr-2xl bg-white bg-clip-padding shadow-[0px_-1px_0px_-1px_rgba(0,_0,_0,_0.05),_0px_-1px_1px_-1px_rgba(0,_0,_0,_0.05),_0px_-1px_2px_-1px_rgba(0,_0,_0,_0.05),_0px_-2px_4px_-2px_rgba(0,_0,_0,_0.05),_0px_-3px_6px_-3px_rgba(0,_0,_0,_0.05)] lg:-right-8 lg:rounded-tr-none lg:shadow-[-1px_-1px_0px_-1px_rgba(0,_0,_0,_0.05),_-1px_-1px_1px_-1px_rgba(0,_0,_0,_0.05),_-1px_-1px_2px_-1px_rgba(0,_0,_0,_0.05),_-2px_-2px_4px_-2px_rgba(0,_0,_0,_0.05),_-3px_-3px_6px_-3px_rgba(0,_0,_0,_0.05)] xl:-right-[calc(50vw_-_582px)]" />
        <div className="mx-4 space-y-10 py-10 lg:ml-8 lg:mr-0 lg:space-y-16 lg:py-16 xl:ml-16">
          <Announcement
            imagePlaceholder="data:image/webp;base64,UklGRkoDAABXRUJQVlA4WAoAAAAgAAAAYwAANwAASUNDUBACAAAAAAIQYXBwbAQAAABtbnRyUkdCIFhZWiAH5wAJAAMACgAqAAlhY3NwQVBQTAAAAABBUFBMAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWFwcGx4SK3FcuIyLdC0OuxH22ooAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApkZXNjAAAA/AAAADZjcHJ0AAABNAAAAFB3dHB0AAABhAAAABRyWFlaAAABmAAAABRnWFlaAAABrAAAABRiWFlaAAABwAAAABRyVFJDAAAB1AAAABBjaGFkAAAB5AAAACxiVFJDAAAB1AAAABBnVFJDAAAB1AAAABBtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABoAAAAcAFYAWAAyADQANwA2ACAAUwBlAHIAaQBlAHMAAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAANAAAABwAQwBvAHAAeQByAGkAZwBoAHQAIABBAHAAcABsAGUAIABJAG4AYwAuACwAIAAyADAAMgAzWFlaIAAAAAAAAPbWAAEAAAAA0y1YWVogAAAAAAAAb6QAADj2AAADkVhZWiAAAAAAAABilAAAt4YAABjaWFlaIAAAAAAAACSeAAAPhAAAtsJwYXJhAAAAAAAAAAAAAfYEc2YzMgAAAAAAAQw/AAAF3f//8ygAAAeRAAD9kf//+6P///2jAAAD2wAAwHlWUDggFAEAAJAMAJ0BKmQAOAA+pUSXSj4kIqG23Mz7wBSJZy2ACkBBfo5KDgakoCwpPIFLJFq2V5Uu3rmuhrYu8RKardNDqZZNZT/9XHhnAv1QerVm9+c++ScBmT4m6cDYc1Lyl1uhkFwi5fDy+pbx/LA1CUAA/uyzh08GhdtcRc42yZuLoz3aDTgzmXEmzN3ZlpQk6ulR6hj8C1u2s4Ujr8jzeM3YeC5FUcLJ4QdeZ8EoCEpMw4beggd4sdXNkMJGTjxMfmTd+B6mlykVmoXtGX51rSw4sRsHUe35Ol/E59HsrcrAfZTdBx4UZGaf2ggfNQDp11z/SNFbAxn2fqI6LXn4Ef0yrZyW2yPtN3Vf1/VR2yOOB6PdmnoAAA=="
            imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/w_1100,q_auto,f_auto/v1693738798/blog/features/feature-0903_zyjfqk.png"
            imageWidth={1461}
            imageHeight={822}
            imageSrcSet="
              https://res.cloudinary.com/dgppby8lr/image/upload/w_560,q_auto,f_auto/v1693738798/blog/features/feature-0903_zyjfqk.png 280w,
              https://res.cloudinary.com/dgppby8lr/image/upload/w_1120,q_auto,f_auto/v1693738798/blog/features/feature-0903_zyjfqk.png 560w,
              https://res.cloudinary.com/dgppby8lr/image/upload/w_1680,q_auto,f_auto/v1693738798/blog/features/feature-0903_zyjfqk.png 840w,
              https://res.cloudinary.com/dgppby8lr/image/upload/w_2200,q_auto,f_auto/v1693738798/blog/features/feature-0903_zyjfqk.png 1100w,
              https://res.cloudinary.com/dgppby8lr/image/upload/w_3300,q_auto,f_auto/v1693738798/blog/features/feature-0903_zyjfqk.png 1650w,
            "
            imageSizes="(min-width:1024px) 518px, 90vw"
            title="Code Playground, New Features 頁"
            description={[
              {
                text: "為教學文章添加了 code playground component，code playground 裡的 code 是可以隨意更改的，並且你更改的結果會呈現在下方的 result 區塊。以後只要你在文章中看到 code playground，都鼓勵你可以調調看 code，實際體會不同寫法帶來的結果，相信這樣能更幫助你理解 🤓",
                link: "http://justincy.com/articles/anitabs#final-code",
              },
              {
                text: "另外，這次也新增了 New Features 頁 (沒錯就是這頁)，紀錄所有新出的 features。",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
