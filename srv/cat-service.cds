using trainer as my from '../db/data-model';

@path : 'my_cap'
service CatalogService {
    entity training as projection on my.training;
}
