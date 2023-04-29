import Link from "next/link";

type ButtonRoots = "button" | typeof Link; // to support props of both components

interface BaseButton<Props> {
  <Root extends ButtonRoots>(
    //props: GetPropsWithOverride<Root, Props>
  ): JSX.Element;
  (props: Props): JSX.Element;
}