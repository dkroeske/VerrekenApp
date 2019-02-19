import {KasboekItem} from './KasboekItem';

export class Kasboek {
  constructor(
    public totaal: number = 0,
    public items: KasboekItem[] = []
  ) {}
}
