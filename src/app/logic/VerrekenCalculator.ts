import {Kasboek} from '../models/Kasboek';
import {Deelnemer} from '../models/Deelnemer';
import {forEach} from '@angular/router/src/utils/collection';
import {KasboekItem} from '../models/KasboekItem';

export class VerrekenCalculator {
  constructor() {}

  verreken(deelnemers: Deelnemer[]): Kasboek {

    const kasboek = new Kasboek();

    kasboek.totaal = deelnemers.map( item => item.inleg).reduce( (acc, val) => acc + val, 0);

    const dn: Deelnemer[] = deelnemers.filter(item => Math.abs((item.inleg * deelnemers.length) - kasboek.totaal) >= 0.001 );

    for (const idx of dn) {
      for (const idy of dn ) {
        if (idx !== idy ) {
          const betaling = (idx.inleg / dn.length) - (idy.inleg / dn.length);
          if (betaling > 0 ) {
            const kasboekItem = new KasboekItem(idy.name, idx.name, betaling);
            kasboek.items.push(kasboekItem);
          }
        }
      }
    }

    return kasboek;
  }
}
