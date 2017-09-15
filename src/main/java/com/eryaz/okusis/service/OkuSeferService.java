package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuSefer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing OkuSefer.
 */
public interface OkuSeferService {

    /**
     * Save a okuSefer.
     *
     * @param okuSefer the entity to save
     * @return the persisted entity
     */
    OkuSefer save(OkuSefer okuSefer);

    /**
     *  Get all the okuSefers.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<OkuSefer> findAll(Pageable pageable);

    /**
     *  Get the "id" okuSefer.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuSefer findOne(Long id);

    /**
     *  Delete the "id" okuSefer.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
