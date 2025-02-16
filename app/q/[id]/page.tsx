import { QuoteTypes } from "@/types/quote";
import { getQuote } from "@/helpers/getQuote";

export default async function DetailQuote({
  params,
}: {
  params: { id: string };
}) {
  const data: any = await getQuote(params.id);
  if (!data || data.length === 0) {
    return (
      <>
        <div>Data null</div>
      </>
    );
  }

  return (
    <>
      <div>Halo {data[0]?.quote}</div>
    </>
  );
}
