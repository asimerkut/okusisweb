package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuGuzergahService;
import com.eryaz.okusis.domain.OkuGuzergah;
import com.eryaz.okusis.repository.OkuGuzergahRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing OkuGuzergah.
 */
@Service
@Transactional
public class OkuGuzergahServiceImpl implements OkuGuzergahService{

    private final Logger log = LoggerFactory.getLogger(OkuGuzergahServiceImpl.class);

    private final OkuGuzergahRepository okuGuzergahRepository;
    public OkuGuzergahServiceImpl(OkuGuzergahRepository okuGuzergahRepository) {
        this.okuGuzergahRepository = okuGuzergahRepository;
    }

    /**
     * Save a okuGuzergah.
     *
     * @param okuGuzergah the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuGuzergah save(OkuGuzergah okuGuzergah) {
        log.debug("Request to save OkuGuzergah : {}", okuGuzergah);
        return okuGuzergahRepository.save(okuGuzergah);
    }

    /**
     *  Get all the okuGuzergahs.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<OkuGuzergah> findAll() {
        log.debug("Request to get all OkuGuzergahs");
        return okuGuzergahRepository.findAll();
    }

    /**
     *  Get one okuGuzergah by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuGuzergah findOne(Long id) {
        log.debug("Request to get OkuGuzergah : {}", id);
        return okuGuzergahRepository.findOne(id);
    }

    /**
     *  Delete the  okuGuzergah by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuGuzergah : {}", id);
        okuGuzergahRepository.delete(id);
    }
}
