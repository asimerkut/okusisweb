package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuSehir;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing OkuSehir.
 */
public interface OkuSehirService {

    /**
     * Save a okuSehir.
     *
     * @param okuSehir the entity to save
     * @return the persisted entity
     */
    OkuSehir save(OkuSehir okuSehir);

    /**
     *  Get all the okuSehirs.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<OkuSehir> findAll(Pageable pageable);

    /**
     *  Get the "id" okuSehir.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuSehir findOne(Long id);

    /**
     *  Delete the "id" okuSehir.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
