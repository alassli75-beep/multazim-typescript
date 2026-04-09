// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Multazim } from '../client';

export abstract class APIResource {
  protected _client: Multazim;

  constructor(client: Multazim) {
    this._client = client;
  }
}
