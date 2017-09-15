package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuSofor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing OkuSofor.
 */
public interface OkuSoforService {

    /**
     * Save a okuSofor.
     *
     * @param okuSofor the entity to save
     * @return the persisted entity
     */
    OkuSofor save(OkuSofor okuSofor);

    /**
     *  Get all the okuSofors.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<OkuSofor> findAll(Pageable pageable);

    /**
     *  Get the "id" okuSofor.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuSofor findOne(Long id);

    /**
     *  Delete the "id" okuSofor.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
