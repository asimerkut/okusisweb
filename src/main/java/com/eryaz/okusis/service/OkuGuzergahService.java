package com.eryaz.okusis.service;

import com.eryaz.okusis.domain.OkuGuzergah;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing OkuGuzergah.
 */
public interface OkuGuzergahService {

    /**
     * Save a okuGuzergah.
     *
     * @param okuGuzergah the entity to save
     * @return the persisted entity
     */
    OkuGuzergah save(OkuGuzergah okuGuzergah);

    /**
     *  Get all the okuGuzergahs.
     *
     *  @param pageable the pagination information
     *  @return the list of entities
     */
    Page<OkuGuzergah> findAll(Pageable pageable);

    /**
     *  Get the "id" okuGuzergah.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    OkuGuzergah findOne(Long id);

    /**
     *  Delete the "id" okuGuzergah.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
