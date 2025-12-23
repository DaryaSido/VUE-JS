//union
let id: string | number = 1;
id = "2"

type TPrice = number | null | string;
let price: TPrice = null;
let discountPrice: NonNullable<TPrice> = 55;
price = 30;
// price = "price"
//literal

type TTheme: "light" | "dark" = "light";
let theme: TTheme = "light";
theme = 'green';